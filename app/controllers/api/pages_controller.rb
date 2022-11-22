class Api::PagesController < ApplicationController
  before_action :set_page, only: [:show, :update, :destroy]

  def index
    render json: Page.all
  end

  def show
    # @page = Page.find(params[:id])
    render json: @page 
  end

  def create
    @page = Page.new(pages_params)
    if @page.save
      render json: @page
    else
      render json: { errors: @page.errors }, status: :unprocessable_entity
    end
  end

  def update
    # @page = Page.find(params[:id])
    if @page.update(pages_params)
      render json: @page
    else
      render json: { errors: @page.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    # @page = Page.find(params[:id])
    @page.destroy
    render json: { message: 'Page deleted' }
  end

  private 

    def pages_params 
      params.require(:page).permit(:title, :author, :body)
    end

    def set_page
      @page = Page.find(params[:id])
    end

end
