function largestPrimeFactor(n){
  var primeNumber = 0;
  var prime = [1,2];
  var factors = [];
  for (var i=3; i<=n; i++) {
  	for (var j=2; j<n[i]; j++) {
  		}
  		if(i % j !==0) {
  		prime.push(i);
  	 }
  }
  for (var t=0; t<prime.length; t++) {
  	if (n % prime[t] === 0) {
  		factors.push(prime[t]);
  	}
  }
 return factors; 
}
console.log (largestPrimeFactor(10));
  
