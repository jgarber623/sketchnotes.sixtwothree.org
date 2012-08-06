require 'rake'
require 'erb'

namespace :post do
	desc 'Create a new post.'
	task :create do
		puts 'What would you like to title your post?'
		title = STDIN.gets.chomp!

		filename = Time.now.strftime( '%F' ) + '-' + title.downcase.gsub( /[^0-9A-Za-z]/i, '-' ).gsub( /-+/, '-' ).chomp( '-' )
		filepath = "_posts/#{filename}.md"

		if ( File.exists?( filepath ) )
			puts 'That file already exists! Please enter a unique file name.'
			filepath = "_posts/#{STDIN.gets.chomp!}.md"
		end

		file = ERB.new( File.read( '_layouts/post.html.erb' ) ).result( binding )

		File.open( filepath, 'w' ) do |f|
			f.write( file )
		end
	end
end