# Frontend Task Essentially AI

This project creates a webpage to display the trade statistics (Open, High, Low, Close, Volume) of a particular stock for a particular day. Polygon free tier API has been used for this task.

## How to run the project:

1. clone the git repository.
2. Open the project in your IDE.
3. Open two terminals: one for "server" folder and another for "client" folder. Choose the respective folders.
4. In both the terminals, run "npm i" for installing dependencies.
5. Now run npm start in both, the client will run on port 3000 and the server on 5000 (https://localhost:port).

## Project flow:

1. A form will accept the data for the stock details (symbol and date). The symbol has to be in uppercase.An error handling has been added to ensure this.
2. On clicking submit, a call goes through to the post request (through context provider), to the api endpoint exposed by the node.js server. This will pass the date and symbol to the api.
3. The node.js api endpoint is internally wired to a third-party api by Polygon, authenticated with an apikey. Through the url of this api, the symbol and date are passed, to get the data of the stocks. An error handling has been added to handle responses other than 200.
4. The necessary data from the reposnse is then passed to the frontend.
5. The data is consumed from the context api, and displayed in the display box.
6. The display box also prints errors that has been encountered while fetching data from the api.

## Project execution for the layman:

1. Enter details in the form provided- symbol- date.
2. Click submit
3. See data displayed in the box below.
