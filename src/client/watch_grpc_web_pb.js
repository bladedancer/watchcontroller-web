/**
 * @fileoverview gRPC-Web generated client stub for central.events.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var apicentral_pb = require('./apicentral_pb.js')
const proto = {};
proto.central = {};
proto.central.events = {};
proto.central.events.v1 = require('./watch_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.central.events.v1.watchClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.central.events.v1.watchPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.central.events.v1.Request,
 *   !proto.central.events.v1.Event>}
 */
const methodDescriptor_watch_subscribeOne = new grpc.web.MethodDescriptor(
  '/central.events.v1.watch/subscribeOne',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.central.events.v1.Request,
  proto.central.events.v1.Event,
  /**
   * @param {!proto.central.events.v1.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.central.events.v1.Event.deserializeBinary
);


/**
 * @param {!proto.central.events.v1.Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.central.events.v1.Event>}
 *     The XHR Node Readable Stream
 */
proto.central.events.v1.watchClient.prototype.subscribeOne =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/central.events.v1.watch/subscribeOne',
      request,
      metadata || {},
      methodDescriptor_watch_subscribeOne);
};


/**
 * @param {!proto.central.events.v1.Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.central.events.v1.Event>}
 *     The XHR Node Readable Stream
 */
proto.central.events.v1.watchPromiseClient.prototype.subscribeOne =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/central.events.v1.watch/subscribeOne',
      request,
      metadata || {},
      methodDescriptor_watch_subscribeOne);
};


module.exports = proto.central.events.v1;

