# puts "hello world"

# adjective = "Big Bad"

# puts "Hello #{adjective} world"

# hello_world = "hello world".upcase

# puts hello_world

######
# Nums Array and Enumerables
######

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# p nums.uniq
# p nums.push(5)
# p nums.pop
# p nums.shift
# p nums.unshift(5)
# p nums.length

# p nums.include?(8)

# p nums.find_all {|num| num > 10}

# p nums.all? {|num| num > 0}

# p nums.any? {|num| num % 8 == 0}

# p nums.count {|num| num > 4}

# p nums.each_with_index {|num, index| num * index}

# p nums.find {|num| num % 7 == 0 && num % 5 == 0 && num > 0}

# p nums.first(3)

# p nums.last(5)

# p nums.group_by {|num| num % 3 == 0}

# p nums.minmax()

# p nums.reject{ |num| num % 3 == 0 }

# p nums.select{ |num| num % 5 == 0 }

####
# Color Array
####

# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# p colors.sample()
# p colors.reverse()
# p colors.map(&:upcase)

####
# Methods
####

# def find_area height, width
#     height * width
# end

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five arr
#     arr.each{|item| p item*5}
# end

# multiply_each_by_five nums

####
# Hashes
####

# book = {
#     title: 'The Great Gatsby',
#     author: 'F Scott Fitzgerald',
#     year: 1925,
#     price: 10
# }
  
#   lamp = {
#     type: 'reading',
#     brand: 'Ikea',
#     price: 25
# }
  
#   table = {
#     type: 'bed side',
#     brand: 'Crate & Barrel',
#     color: 'birch',
#     price: 50
# }

# def print_price price
#     puts price[:price]
# end

# print_price lamp

# def print_item_sums price_1, price_2
#     puts price_1[:price] + price_2[:price]
# end

# print_item_sums lamp, book

####
# Solving Problems with Ruby
####

# def euler_problem
#     arr = []
#     sum = 0
#     for i in 1..999
#         if i % 3.0 == 0
#             arr.push(i)
#         elsif i % 5.0 == 0
#             arr.push(i)
#         else
#         end
#     end
#     arr.map{ |num| sum += num}
#     p sum
# end

# euler_problem

# def is_prime?(num)
#     (2..(num - 1)).each do |n|
#       return if num % n == 0
#     end
#     puts "#{num} is prime"
# end

# def get_primes limit  
# (1..limit).each{ |num| puts is_prime? num }
# end



# get_primes 200