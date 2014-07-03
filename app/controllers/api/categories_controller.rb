class API::CategoriesController < API::BaseController
  def index
    render json: Category.all
  end
end
