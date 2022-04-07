import * as node from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

import * as completion from './completion';
import * as hover from './hover';

const connection = node.createConnection(node.ProposedFeatures.all);
const documents: node.TextDocuments<TextDocument> = new node.TextDocuments(TextDocument);

connection.onInitialize((params: node.InitializeParams) => {
    const capabilites = params.capabilities;

    const result: node.InitializeResult = {
        capabilities: {
            textDocumentSync: node.TextDocumentSyncKind.Incremental,
            // add providers
            completionProvider: {
                resolveProvider: true
            },
//            hoverProvider: true
        }
    };

    return result;
});

connection.onInitialized(() => {
    ;
});

completion.register(connection);
hover.register(connection);

documents.listen(connection);
connection.listen();
