###### 📂 Codebase structure

# What's inside each folder

Each folder within the `examples` folder will have:

- its own code disposition and files structure

- its own `README.md` file which you can consult to better understand what some particular lines of code are doing

<br />

###### 🧠 Good to know

# Packages, configurations and information

### 📦 The `urql` package

What we're using to write and launch functional and clean GraphQL queries is the `urql` package which is, indeed, one of the featured packages within the [GraphQL website](https://graphql.org/code/#javascript-client).

`urql` will help us with setting up a GraphQL `Client` able to add custom parameters, tokens and headers to the fetch request. It will make writing queries a breeze.

In order to install it, open the terminal within your project folder and run `npm i -D urql`, which will add the package only as a development dependency.

### ⚙️ Configuration for GraphQL Client

For the following examples, we have setup a so called GraphQL `Client`, which is the main process responsible for intercepting each GraphQL `Query` and "filtering" it by adding each possible necessary information in order to call the API successfully. Through this configuration, we can add particular parameters as, for instance, headers or additional keys in the final payload of the fetch request.

Below are some basic information about the parameters specified during the configuration for the GraphQL Client, but you can directly find the GraphQL Client configuration through the `app/graphql-client.tsx` path, to directly see what code is running behind the scenes.

- `url` parameter, useful to indicate an endpoint through which our Client will send requests

- `exchanges` parameters, handlers that fulfill our GraphQL requests and can change the stream of operations or results

- `fetchOptions` parameter, useful to append particular tokens, headers or additional parameters to the request