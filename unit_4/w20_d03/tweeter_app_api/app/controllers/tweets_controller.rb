class TweetsController < ApplicationController

    def index
        render json: Tweet.all
    end

    def show
        tweet = Tweet.find(params[:id])
        render(json: { tweet: tweet })
    end

    def create
        song = Song.new(song_params)
    
        if song.save
          render json: { song: song }
        else
          render(status: 422, json: { song: song, errors: song.errors })
        end
    end

    def update
    end

    def destroy
    end

    private

    def item_params
    params.require(:item).permit(:name, :price)
    end

end
