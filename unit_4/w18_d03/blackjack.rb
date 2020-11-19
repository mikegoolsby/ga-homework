class Human
    attr_accessor :name, :bankroll, :hand, :sum_hand
    def initialize(name)
        @name = name
        @bankroll = 100
        @hand = []
        @sum_hand = 0
    end
    def sum(hand)
        @sum_hand = hand[0].value + hand[1].value
    end 
end

class Computer
    attr_accessor :name, :bankroll, :hand, :sum_hand
    def initialize(name)
        @name = name
        @bankroll = 10000
        @hand = []
        @sum_hand = 0
    end
    def sum(hand)
        @sum_hand = hand[0].value + hand[1].value
    end 
end

deck = []

class Card
    attr_reader :value
    def initialize(value)
        @value = value
    end
end


for i in 1..4
    for i in Array(2..11) + [10,10,10]
        deck.push(Card.new(i))      
    end
end

deck.shuffle!


#entering logic below

