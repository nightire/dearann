require 'test_helper'

class APIPostsTest < ActionDispatch::IntegrationTest
  setup do
    host! 'api.dearann.dev'

    Post.create! [
      { title: 'Post 1', content: 'A Great Post!' },
      { title: 'Post 2', content: 'Another Fantastic Post!' }
    ]

    @bedroom = Category.create! name: 'bedroom', url_name: 'bedroom'
    @bedroom.posts.create! title: 'Post 3', content: 'A Post Have Category'
  end

  test 'return list of posts' do
    get '/posts'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    posts = parse_json(response.body).fetch(:posts)
    assert_equal Post.count, posts.size

    post = posts[2]
    assert_equal @bedroom.id, post[:category_id]
  end
end
