# L20 Authentication

Web authentication is the process of verifying the identity of a user who wants to access a website or web application. It is a crucial aspect of web security, as it helps prevent unauthorized access to sensitive data and resources.

There are several types of web authentication mechanisms, including:

1. Password-based authentication: This is the most common form of authentication, where a user provides a username and password to access a website. However, this method is susceptible to brute-force attacks and password guessing, and users may choose weak passwords that are easy to guess.

2. Multi-factor authentication: Multi-factor authentication (MFA) adds an extra layer of security to the authentication process. In addition to a password, the user must also provide a second factor, such as a fingerprint or a one-time code generated by a mobile app. This makes it much harder for attackers to gain access to the user's account.

3. Single sign-on: Single sign-on (SSO) allows users to access multiple websites and applications with a single set of login credentials. This reduces the need for users to remember multiple passwords and makes it easier for organizations to manage user accounts. However, SSO also creates a single point of failure, as a breach of the SSO system can grant an attacker access to all associated accounts.

4. OAuth and OpenID Connect: OAuth and OpenID Connect are open standards that allow users to authorize third-party applications to access their data on another website. This allows for a more seamless user experience and reduces the need for users to create separate accounts for each application. However, users must be careful to only grant permissions to trusted applications.

In addition to these mechanisms, web authentication also involves using secure protocols, such as HTTPS and SSL/TLS, to encrypt data in transit and prevent eavesdropping and man-in-the-middle attacks.

Overall, web authentication is an essential aspect of web security, and it is important for website owners and users alike to be aware of the different authentication mechanisms and protocols available to ensure the safety of their data and resources.

## Code Examples

- [examples/20-auth](https://github.com/umass-cs-326/examples/tree/main/20-auth)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

**NO EXERCISE**, but you should really practice this stuff!

## Reference

### Node.js

- [Passport](http://www.passportjs.org/docs/), an authentication middleware for Node.js.

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
- [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres), an extension that allows you to connect to a PostgreSQL database and run queries.
- [MongoDB for VSCode](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode), an extension that allows you to connect to a MongoDB database and run queries.
