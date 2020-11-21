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
    for i in Array(2..11) + [10,10,10] # googled this, to be honest
        deck.push(Card.new(i))      
    end
end

#array method
deck.shuffle!


#entering logic below

quit = false
puts "Player's name: "
name = gets.chomp #takes above line and enters it as variable 'name'
player = Human.new(name)
computer = Computer.new("The House")

while !quit
    if player.bankroll <= 0
        puts "You ran out of money. You lose"
        quit = true
        break
    end
    puts "#{player.name} is literally #{player.bankroll} deep in the bank"
    puts "#{computer.name} (cheater) is literally #{computer.bankroll} in the bank and prob in the 1%"
    puts "(Q)uit, or (D)eal? LMK..."
    input = gets.chomp
    if input == "d"
        player.hand = deck.sample(2)
        computer.hand = deck.sample(2)
        player.sum(player.hand)
        computer.sum(computer.hand)
        puts "you're stackin: #{player.sum_hand} and the computer (cheater) is stackin: #{computer.sum_hand}"
        if player.sum_hand == 21
            player.bankroll += 10
            computer.bankroll -= 10 
            puts "You win! Wawaweewa!"
        elsif player.sum_hand > 21
            computer.bankroll += 10
            player.bankroll -= 10
            puts "house wins, you lose. woof."
        else

            if player.sum_hand > computer.sum_hand
                player.bankroll += 10
                computer.bankroll -= 10 
                puts "Wawaweewa! 10 dollars from the house man!"
            elsif computer.sum_hand > player.sum_hand
                computer.bankroll += 10
                player.bankroll -= 10
                puts "It is rigged against you and the house won again!"
            else 
                puts "It's a tie! 2020 strikes again and congress must choose the winner here."
            end
        end
    elsif input == 'q'
        quit = true
    else 
        puts "Invalid input. Please read the instructions..."
    end
end
