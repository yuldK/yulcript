import * as path from 'path';
import * as vscode from 'vscode';
import * as node from 'vscode-languageclient/node';

let client: node.LanguageClient;

export function activate(context: vscode.ExtensionContext) {

    const server_module = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    const server_option: node.ServerOptions = {
        run: {
            module: server_module,
            transport: node.TransportKind.ipc
        },
        debug: {
            module: server_module,
            transport: node.TransportKind.ipc,
            options: {
                execArgv: [
                    '--nolazy',
                    '--inspect=6009'
                ]
            }
        }
    };

    const client_option: node.LanguageClientOptions = {
        documentSelector: [{
            scheme: 'file',
            language: 'yulcript'
        }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.yc')
        }
    };

    client = new node.LanguageClient(
        'yulcript-client',
        'yulcript client',
        server_option,
        client_option
    );

    client.start();
}

export function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
