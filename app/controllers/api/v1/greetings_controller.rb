class Api::V1::GreetingsController < ApplicationController
  def index
    greeting_id = rand(1..5)
    @message = Message.find(greeting_id)
    render json: @message
  end
end
