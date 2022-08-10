User.destroy_all
u1 = User.create :user => 'elias', :admin => true
puts "#{User.count} users"

Flight.destroy_all
f1 = Flight.create :flight_number => 'FLK', :origin => 'Sydney', :destination => 'Korea', :date => DateTime.strptime("09/01/2009 19:00", "%m/%d/%Y %H:%M")
puts "#{Flight.count} flights"

Plane.destroy_all
p1 = Plane.create :name => 'sei54', :rows => '50', :columns => '4'
puts "#{Plane.count} planes"

puts "Association"
f1.users << u1
u1.flights << f1

puts "complete"
