class API::PostsController < API::BaseController
  def index
    render json: Post.includes(:category)
  end
end
