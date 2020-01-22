import 'react-native';
import React from 'react';
import Main from '../src/Main';

import renderer from 'react-test-renderer';

test('Home snapShot',()=>{
    const snap=renderer.create(
        <Main/>
    ).toJSON();
    expect(snap).toMatchSnapshot();
});
