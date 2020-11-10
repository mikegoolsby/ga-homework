# puts "hello world"

# adjective = "Big Bad"

# puts "Hello #{adjective} world"

# hello_world = "hello world".upcase

# puts hello_world

######
# Nums Array and Enumerables
######

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

p nums.uniq
p nums.push(5)
p nums.pop
p nums.shift
p nums.unshift(5)
p nums.length

p nums.include?(8)

p nums.find_all {|num| num > 10}

p nums.all? {|num| num > 0}

p nums.any? {|num| num % 8 == 0}

p nums.count {|num| num > 4}

p nums.each_with_index {|num, index| num * index}

p nums.find {|num| num % 7 == 0 && num % 5 == 0 && num > 0}

p nums.first(3)

p nums.last(5)

p nums.group_by {|num| num % 3 == 0}

p nums.minmax()

p nums.reject{ |num| num % 3 == 0 }

p nums.select{ |num| num % 5 == 0 }