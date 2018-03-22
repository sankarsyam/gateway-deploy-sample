import expect from 'expect';
import config from 'dotenv/config';
import chai from 'chai';
import chaihttp from 'chai-http';
import server from './../server';
import http from 'http';

chai.use(chaihttp);

describe('Paths', () => {
  describe('/', function() {
    describe('[GET]', function() {
      it('should return 200', function(done) {
          console.log('###################'+process.env.PORT);
                    console.log('###################'+process.env.ffff);

        http.get('http://localhost:' + process.env.PORT, function(res) {
          expect(res.statusCode).toEqual(200);
          done();
        });
      });
    });
  });
});