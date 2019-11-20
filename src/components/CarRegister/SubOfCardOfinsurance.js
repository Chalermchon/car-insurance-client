import React from 'react';
import { Table, Header } from 'semantic-ui-react';

export default ({ optionKeys, option }) => {
    return optionKeys.map(optionKey => {
        if (option[optionKey] !== null) {
            return (
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Header.Subheader>{optionKey}</Header.Subheader>
                        </Header>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>{option[optionKey]} บาท</Table.Cell>
                </Table.Row>
            );
        }
    });
}
