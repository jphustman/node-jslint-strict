all:
	curl --silent \
    -o ./lib/fulljslint.js \
    https://github.com/douglascrockford/JSLint/raw/master/fulljslint.js
	./lib/mkjslint

# TODO use node rather than curl

clean:
	rm -f ./lib/fulljslint.js
	rm -f ./jslint.js
	rm -f ./jslint-strict.js
