User.destroy_all
u1 = User.create :user => 'elias', :admin => true
puts "#{User.count} users"

Flight.destroy_all
f1 = Flight.create :flight_number => 'FLK', :origin => 'Sydney', :destination => 'Korea', :date => 05/05/2020 , :plane => '32'
puts "#{Flight.count} flights"

puts "Association"
u1.flights << f1
f1.users << u1