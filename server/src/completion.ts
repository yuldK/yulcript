import * as node from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

export function register(connection: node.Connection) {
    connection.onCompletion(onCompletion);
    connection.onCompletionResolve(onCompletionResolve);
}

function onCompletion(position: node.TextDocumentPositionParams): node.CompletionItem[] {
    const results: node.CompletionItem[] = [];
    results.push({
        label: '[test]',
        kind: node.CompletionItemKind.Struct,
        data: {
            id: 'instance name'
        }
    });

    results.push({
        label: 'name',
        kind: node.CompletionItemKind.Function,
        data: {
            id: 'member',
            type: 'string',
            array: false
        }
    });

    results.push({
        label: 'desc',
        kind: node.CompletionItemKind.Function,
        data: {
            id: 'member',
            type: 'string',
            array: false
        }
    });

    results.push({
        label: 'count',
        kind: node.CompletionItemKind.Function,
        data: {
            id: 'member',
            type: 'number',
            array: false
        }
    });

    return results;
}

function onCompletionResolve(item: node.CompletionItem): node.CompletionItem {
    switch (item.data.id) {
        case 'instance name': {
            item.detail = 'instance';
            item.documentation = '인스턴스 설명입니다.';
        }
        break;
        case 'member': {
            item.detail = 'member';
            item.documentation = '멤버 설명입니다.';
            switch (item.data.type) {
                case 'number': {
                    item.insertText = `${item.label}: 0;`;
                }
                break;
                case 'string': {
                    item.insertText = `${item.label}: \`\`;`;
                }
                break;
            }
        }
        break;
    }
    return item;
};
