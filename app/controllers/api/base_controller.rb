class API::BaseController < ApplicationController
  before_filter :setup_cors

  private

  def setup_cors
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD'
    headers['Access-Control-Allow-Headers'] = '*,x-requested-with,Content-Type,If-Modified-Since,If-None-Match'
    headers['Access-Control-Expose-Headers'] = 'ETag'
    headers['Access-Control-Max-Age'] = '86400'
  end
end
