# Online Preview

You can visit a launched version of the web-app [here](http://bvg.tinypro.ir).

# Run locally

As this project has been created using CRA, you can run it using like:

```
cd [project directory]
npm start
```

# BVG Ticket Offer Web App

⚠️ This is just kind of code challenge, not production ready.

A sample app which loads a questionaire and asks questions depending on user's answers and at the end represents a sample ticket which is tailored to the user's requirements.

# Desicion making

As required on challenge prescription, this app simulates decision tree scrolling through pruning irrelevant branches, where `form`s are the branches and `ticket`s has been assumed to be leaves. On each scrolling phase, the eligible branch / leave (let's call them `entry`) will be examined through checking the answers of previous steps. This evaluation would be handled by the `entries` themselves.

Each `form` can have a set of fields of type `text`, `number`, `date`, `time` and `options`. They can also validate their own value when answer submission happens.

# Survey Data Source

you can change ticket and survey data sources under `src/dataSource` folder. Both survey and ticket data sources are serializable and you can configure them using either JS or JSON.

# Frameworks and libraries

On this project I tried to use React library (using CRA), HTML5 and CSS3 features and didn't use any other 3rd party libraries.

I hestitated using `Redux` or `Recoil` or any other global state management libraries, since it was somehow obliged on challenge prescription.

# Scalability

Since whole survey tree scrolling happens on a context (`TicketSellContext`), it can be connected to any data source and any decision maker resource easily. Also this context wraps whole App, which let other components use the same data all over the app. For example we can easily implement a bread crump feature.
