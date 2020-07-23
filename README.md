# Daring to Decouple

We want to hook up our Bounty hunter server to a front end. What do we need to do to accomplish this? Let's plan it out.

## Step one: look at the code you've got

Let's look at the code you've been given. What is it doing? 

## Step two: setting up the server

### CORS

Because we have a decoupled app, we aren't able to access our bounty server without allowing [Cross-origin Reference Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Open up your bounty server and let't fix that.

#### Install `cors`

Run `npm i cors` to install the [cors module](https://www.npmjs.com/package/cors). If you haven't already, also install `dotenv` and require it at the top of your `server.js` (or whatever you named your entry-point).

#### The easy way to impliment cors

We could fix this super quick by simply requiring cors, then `app.use`ing it.

```javascript
...
const cors = require('cors');

app.use(cors())
```

The benefit of this method is that it's quick. The downside of this method is that it allows ANY site to make a call to this API. For an open API like the [Kanye Rest API](https://kanye.rest/), this is a good thing! But since our employers are super secretive, we want to be able to restrict which origins can query this API.

#### One origin allowed

If we want to allow one origin to access our API, we can add some configuration to our `cors`.

```javascript
const cors = require('cors')

app.use(cors({
  "origin": process.env.CLIENT_URL
}))
```

#### Future thinking

You can look at the cors docs to impliment other configurations that allow you to:
* Allow CORS only on certain routes _(it functions the same as our `isLoggedIn` middleware from express auth)_
* Allow CORS from multiple origins _(good if you have different clients calling this API: think paid service)_

### JSON

Since we're using a react app, we need to tell our express app that our body might be json (as opposed to `x-www-form-urlencoded`). RIght under where we import the middleware that handles form data, we're going to add one line:

```javascript
app.use(express.json())
```

### .env
We're gonna be sneaky and hide our approved CORS origin in our `.env`, so let's add it into our `.env`. While we're at it, let's change our port to be 3001 so we don't conflict with our react server.

## Step 3: Client Side

to do list
- [ ] set up server base url in our .env
- [ ] make sure we can get info from our server
- [ ] pass all dem deets into our `BountyCard` component
- [ ] Link our `NewBounty` form page
- [ ] write form handlers
- [ ] Impliment a delete button