import React from 'react';

import { TypescriptApiBox } from '@dxos/showcase';

import docs from "../data/dxos-api.json";

export const APIReference = ({ name }) => {
    return (
        <TypescriptApiBox docs={docs} name={name} />
    );
};