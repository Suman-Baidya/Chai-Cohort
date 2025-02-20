# HTTP (Hyper Text Transfer Protocol)

### HTTP Protocol
- Protocol used to transfer hyper text (linked text)
- Stateles protocol (http do not store data)
- Session stored state btween frontend and backend
- http header:- client, browser info, date-time, cookie for store
- Request(get, post, delete) ---> Response(200,404,500) Model

### Actual Work
- What action to perform ( GET, POST... )
- Where to perform ( http://api.in )
- Was it done ( 200, 404 )

### HTTP-2
- http-1 just Text Transfer
- http means http-2
- uses compression
- uses multiplexing (Many files at same time)
- Encryption (https)
- T.L.S --> Transport Layer Security

### Important Jurgon
- User Agent (Browser) - who send information to server
- TCP --> Transmission Control Protocol
- FTP --> File Transfer Protocol
- IP --> Internet Protocol
- URL --> Uniform Resource Locator -- Fancy name: End point
- DNS --> Domain Name System/Server -- points URL to IP
- Header - Pass additional Information
- Payload - Actual Data(email, password)
- Cache (Store the data)

### Borwser - Server Connection
- Step-1: Setup TCP Connection
- Step-2: Exchange TLS cert. (http)
- Step-3: Send verb + URL + Data + More
- Step-4: Gets the response, back with status code & data(img, csv..)
- Step-5: TCP Connection is closed (state less)

