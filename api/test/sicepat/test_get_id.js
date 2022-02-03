const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));


const pageGetId = require('../../page/sicepat/get_id.js')
const code = require('../../helper/reponse_code_message.json')

const testCase = {
        'positive' : {
            'getDataId' : 'As a user I want to get data id',
        }
};

let id = '';

describe('Api add new address | /v1/account/address/me', () => {
    

    describe('Test case positive API Address', () => {
        
        it(`@post @addNewAddress${testCase.positive.getDataId}`, async() => {
            const response = await pageGetId.getId();
            assert(response.status).to.equal(code.successOk);
            assert(response.body[0].id).to.equal(1)
            responseId = response.body[0].id
            id = responseId
        });

        it(`@post @addNewAddress${testCase.positive.getDataId}`, async() => {
            const response = await pageGetId.getUserId(id);
            assert(response.status).to.equal(code.successOk);
        });

        it(`@post @addNewAddress${testCase.positive.getDataId}`, async() => {
            const response = await pageGetId.getUserIdComment(id);
            assert(response.status).to.equal(code.successOk);
            console.log(response.body);
        });

    });

});