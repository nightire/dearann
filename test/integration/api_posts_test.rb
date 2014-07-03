require 'test_helper'

class APIPostsTest < ActionDispatch::IntegrationTest
  setup do
    host! 'api.dearann.dev'

    Post.create! [
      { title: 'Post 1', content: 'A Great Post!' },
      { title: 'Post 2', content: 'Another Fantastic Post!' }
    ]
  end

  test 'return list of all posts' do
    get '/posts'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Post.count, parse_json(response.body).fetch(:posts).size
  end
end
