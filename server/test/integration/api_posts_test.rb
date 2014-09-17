require 'test_helper'

class APIPostsTest < ActionDispatch::IntegrationTest
  setup do
    host! 'api.dearann.dev'

    Post.create! [
      { title: 'Post 1', content: 'A Great Post!' },
      { title: 'Post 2', content: 'Another Fantastic Post!' }
    ]

    @category = Category.create! name: 'bedroom', url_name: 'bedroom'
    @category.posts.create! title: 'Post 3', content: 'A Post Have Category'
  end

  test 'return list of posts' do
    get '/posts'
    assert response.success?
    assert_equal Mime::JSON, response.content_type
    refute_empty response.body

    posts = parse_json(response.body).fetch(:posts)
    assert_equal Post.count, posts.size

    post_have_category = posts[2]
    assert_equal @category.id, post_have_category[:category_id]
  end

  test 'create a new post' do
    post '/posts', {
      post: { title: 'New Post', content: 'This is a new post',
        category: @category.id }
    }.to_json, { 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }
    assert_equal 201, response.status
    assert_equal Mime::JSON, response.content_type

    post_response = parse_json(response.body).fetch(:post)
    assert_equal api_post_url(post_response[:id]), response.location
  end
end
