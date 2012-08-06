require 'rake'
require 'erb'

namespace :post do
	desc 'Create a new post'
	task :create do
		puts 'What would you like to title your post?'
		title = STDIN.gets.chomp!
		timestamp = Time.now.to_s

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

		# system %Q{}
	end

	desc 'Delete all posts'
	task :delete_all do
		puts 'WARNING: This will delete all of your posts. Are you sure? (Anything other than "yes" will cancel)'

		case STDIN.gets.chomp
			when 'yes'
				puts 'Deleting all of your posts...'
				system %Q{rm -rf _posts/*}
				puts 'All posts were deleted.'
			else
				puts 'Leaving your posts alone.'
		end
	end
end

desc 'Create a new post (shorthand)'
task :post => 'post:create'

namespace :site do
	desc 'Create site'
	task :create do
		system %Q{jekyll --pygments --safe}
	end

	desc 'Delete site'
	task :delete do
		system %Q{rm -rf _site/*}
	end
end

desc 'Build site (shorthand)'
task :site => 'site:create'