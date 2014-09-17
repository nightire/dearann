require 'test_helper'

class APICategoriesTest < ActionDispatch::IntegrationTest
  setup do
    host! 'api.dearann.dev'

    Category.create! [
      { name: 'Category 1', url_name: 'category-1' },
      { name: 'Category 2', url_name: 'category-2' }
    ]
  end

  test 'return list of all categories' do
    get '/categories'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    categories = parse_json(response.body)
    assert_equal Category.count, categories.fetch(:categories).size
  end
end
