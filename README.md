###### 🤔 Discover

# What is GraphQL

GraphQL is an open-source and more efficient alternative to REST. It's useful to retrieve exactly the data we need from an API, constisting of a single endpoint.

GraphQL minimizes the amount of data that need to be transmitted via network, to increase loading times and the overall efficiency of the application. GraphQL, indeed, was invented and already used from Facebook since 2012 in their native mobile applications.

[Learn more about GraphQL](https://www.howtographql.com/basics/0-introduction/)

### 👀 Is GraphQL actually better than REST?

Consider a Blog application as an example, where we need to show information about the author of the posts, its writings and its followers. In order to build something similar using REST, we would need 3 different API endpoints. Also, while calling these endpoints, what we would receive is not just what we are asking for: by calling these endpoints, we may also end up receiving additional information which we don't need, slowing down the application and retrieving data we won't even use.

GraphQL uses a single endpoint, through which you can describe exactly what kind of data you need for a particular needing. This means that we can call a single endpoint and, within a single API call, we can retrieve the user's information, as well as its writings and its followers, and the API will return only what we really need.

### 🧠 What problems does GraphQL solve?

1) **Overfetching:** Downloading unnecessary information

2) **Underfetching:** An endpoint doesn't return enough information, costraining us to call additional API endpoints to retrieve the missing information

<br />

###### 🎲 Jumping into code

# Defining the information we need to retrieve

GraphQL uses its own typing system to structure the schema of an API. The syntax for writing a schema is called [Schema Definition Language (SDL)](https://www.howtographql.com/basics/2-core-concepts/).

Let's declare some types for a Person and for a Post to be retrieven through our GraphQL API:

```typescript
// Person
type Person {
    name: string,
    age: number,
    posts: Post[]
}

// Post
type Post {
    title: string,
    author: Person
}
```

<br />

To decide what data the client needs to retrieve, it formulates a so called "query", which is an explicit request to the server for obtaining particular information.

```typescript
{

    allPersons {
        name
    }

}
```

<br />

In the code above, the `allPersons` is called the "root field" of the query, and everything that follows the root field is called the "payload" of the query. This particular query would return a list of all the persons that are currently stored in the database.

An example response for this query would be the following:

```typescript
{

    "allPersons": [
        { "name": "Johnny" },
        { "name": "Sarah" },
        { "name": "Alice" }
    ]

}
```

<br />

Notice that each person only has a name in the response, and an age wasn't returned. That's because the name was the only field specified in the query payload.

Let's adjust the query payload to also retrieve the age of the persons:

```typescript
{

    allPersons {
        name
        age
    }

}
```

<br />

With the query above, below is what we would get as a response:

```typescript
{

    "allPersons": [
        { "name": "Johnny", "age": 23 },
        { "name": "Sarah", "age": 20 },
        { "name": "Alice", "age": 20 }
    ]

}
```

<br />

### ✒️ How to build-up a query to retrieve information

In a graphical query, each field may have zero or more arguments, if some are specified in the graphical schema.

For instance, the `allPersons` fields could have a `last` parameter, in order to return up to a specified amount of persons.

Here's how the query would look like:

```typescript
{

    allPersons(last: 2) {
        name
        age
    }

}
```

<br />

The query above, indeed, will now return the last two persons that have been stored in the database.

One of the powerful tools GraphQL comes with, is naturally querying nested information. For instance, if you would load all the posts that each person has written, you could simply follow the structure of your types to request these information.

Here's how a corresponding query would look like:

```typescript
{

    allPersons {
        name
        posts {
            title
        }
    }

}
```

<br />

And, at this point, this is a pretty obvious example of what data will be returned from the query above:

```typescript
{

    "allPersons": [

        // Person
        {

            "name": "Johnny",
            "age": 23,
            "posts": [
                { "title": "First article" },
                { "title": "Second article" }
            ]

        },

        // Person
        {

            "name": "Sarah",
            "age": 20,
            "posts": [
                { "title": "First article" },
                { "title": "Second article" }
            ]

        },

        // Person
        {

            "name": "Alice",
            "age": 20,
            "posts": [
                { "title": "First article" },
                { "title": "Second article" }
            ]

        }
        
    ]

}
```

<br />

### 🔤 Editing data with Mutations

GraphQL mades changes via the so called [mutations](https://www.howtographql.com/basics/2-core-concepts/). The three kinds of mutations are for:

1) Creating new data

2) Updating existing data

3) Deleting existing data

Mutations follow the same structure of queries, but they always need to start with the `mutation` keyword:

```typescript
mutation {

    createPerson(name: "Bob", age: 36) {
        name
        age
    }
    
}
```

<br />

### 🗓️ Real-time updates with Subscriptions

When a client subscribes to an event, it initiates and holds a stable connection to the server. It will be, for instance, informed about new users being created. When some kind of event happens, the server pushes the new data to the client.

```typescript
subscription {

    newPerson {
        name
        age
    }
    
}
```

<br />

Let's assume that there are three persons created from other clients while the subscription is active. The server would then, for each of these persons, push the corresponding data to the subscribed client.

<br />

###### 🛠️ Build

# Setting-up a GraphQL Schema

A schema is a collection of GraphQL types. Each schema will have some root types defining the entry points for the API. These root types are the `Query`, `Mutation` and `Subscription` types.

In order to allow our schema to accept the parameters we used so far, we will need to define them and make sure their types are aware of the parameters we would like to insert into them.

If we had to setup a `Query` schema to accept the `allPersons` parameter we used before, we could do something like this:

```typescript
{

    allPersons {
        name
    }
    
}

// Define the "Query" type
type Query {
    allPersons(last: number): Person[]
}
```

<br />

For the `Mutation` root type, we would, instead, do something like this:

```typescript
mutation {

    createPerson(name: "Bob", age: 36) {
        id
    }
    
}

// Define the "Mutation" type
type Mutation {
    createPerson(name: string, age: number): Person
}
```

<br />

For the `Subscription` root type, there is an example below too:

```typescript
subscription {

    newPerson {
        name,
        age
    }
    
}

// Define the "Subscription" type
type Subscription {
    newPerson: Person
}
```

<br />

What the API lets us do right now, is:

1) Read all the persons

2) Create a new person

3) Subscribe to the event of a new person being created

This said, the `Post` type we created above results to be useless at the moment, since our Schemas don't have any space for it to be read or manipulated.