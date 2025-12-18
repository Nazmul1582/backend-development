# 11. Cookies and Session

## 11.1 Session Cookie with HTTP

### 11.1.1 Stateless HTTP nature and introduction to Cookie

HTTP (Hypertext Transfer Protocol) is the fundamental language/protocol of the World Wide Web, defining rules for how web browsers (clients) request, send, and receive data (like web pages, images, videos) from web servers, working as a request-response system to power most internet communication. It's an application-layer protocol that allows users to browse, stream, download, and use web apps by facilitating the transfer of hypertext (linked text/media).

**HTTP is a Stateless Protocol**

### Key aspects

- **Foundation of the Web:** It's the core protocol for exchanging information across the internet.
- **Stateless:** Each request is generally independent, though sessions maintain context.
- **Methods:** Actions like GET (fetch), POST (send data), PUT (update), DELETE (remove) define intent.
- **Security (HTTPS):** A secure, encrypted version (HTTP Secure) uses SSL/TLS to protect data, now standard for most sites (using port 443 instead of 80).
- **Evolution:** HTTP has evolved (HTTP/2, HTTP/3) for better performance, security, and efficiency.

### Cookies

The Cookie is a small message from a web server passed to the user's browser when you visit a website. In other words, Cookies are small text files of information created/updated when visiting a website and stored on the user's web browser.

## 11.1.2 Understanding Cookies: How to make and save them

- **Set Cookie:** `res.cookie(key: value, {httpOnly: true})`
- **Get Cookie:** `req.cookies` using cookie-parser

```js
// set cookies
res.setHeader("Set-Cookie", `username=${username}; HttpOnly; Max-Age=60`)
// OR
res.cookie("username", username, { httpOnly: true, maxAge: 60000 })

// get cookies
req.cookies // using cookie-parser
```

## 11.1.3 Simple login and protected route using Cookie

```js
app.post("/login", (req, res) => {
  const { username } = req.body
  // res.cookie("username", username, { maxAge: 60000, httpOnly: true })
  res.setHeader("Set-Cookie", `username=${username}; HttpOnly; Max-Age=60`)
  // Simulate login functionality
  res.send("Cookie is set")
})

app.get("/protected", (req, res) => {
  const { username } = req.cookies
  if (username !== "nazmul") res.status(401).send("Unauthorized!")
  else
    res
      .status(200)
      .send(`Welcome ${username}! You have access to this protected route`)
})
```

## 11.1.4 Implementing Session with Cookies : Custom Session Storage
