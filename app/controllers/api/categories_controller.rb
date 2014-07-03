class API::CategoriesController < API::BaseController
  def index
    render json: Category.includes(:posts)
  end
end
