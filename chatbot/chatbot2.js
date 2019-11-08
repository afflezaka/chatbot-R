"use strict";
const dialogflow = require("dialogflow");
const config = require("../config/keys2");

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "/home/zakaria/Downloads/coffee-shop-slknlj-27ffc16fca8a.json"
});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

module.exports = {
  textQuery: async function(text, parameters = {}) {
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: JSON,
          languageCode: languageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };

    let responses2 = await sessionClient.detectIntent(request);
    responses2 = await self.handleAction(responses2);
    return responses2;
  },

  handleAction: function(responses2) {
    return responses2;
  }
};

