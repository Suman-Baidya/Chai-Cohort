# Machine Coding on Prototypes

## Prototypes
- Prototypes is prebuild objects that access all object's properties.
- Array.prototype = {"  have all properties like- map(), filter()  "}
- const arr = [1,2,3] --> When you create this, js make a prototype function --> arr.__proto__ = Array.prototype
- You can create an own prototype function --> Array.prototype.suman = function(){create functionality}  --> now you can access this prototype in any other array --> otherArray.suman() --> show your functionality


## Who make this prototypes
- Browser are write this prototype.

## Polyfill
- polyfill or fallback function is a backup function to runnig code of old browser.
- when any browser dose't write any function's prototype then run own written polyfill function.
- [if(!Array.prototype.fill){Array.prototype.fill = function(){our own written code}}]

## Asignment:
- Read documentation of Object from mdn
