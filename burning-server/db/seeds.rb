User.destroy_all
u1 = User.create :user => 'elias', :admin => true
puts "#{User.count} users"

Flights.destroy_all
f1 = Flight.create :flight_number => 'FLK', :origin => 'Sydney', :destination => 'Korea', :date => 05/05/2020 , :plane => '32'
puts "#{Flights.count} flights"

puts "Association"