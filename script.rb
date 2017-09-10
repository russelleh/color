require "csv"
require "json"

colors = CSV.read("rgb.txt", {
  :col_sep => "\t",
  :headers => :first_row,
}).map do |n|
  [n[0], n[1]] 
end.to_h

File.write('rgb.json', colors.to_json)
