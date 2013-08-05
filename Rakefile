require 'rake'
require 'erb'

task :default => 'site:create'

namespace :post do
	desc 'Create a new post'
	task :create do
		puts 'What would you like to title your post?'
		title = STDIN.gets.chomp!
		pubdate = Time.now

		filename = pubdate.strftime('%F') + '-' + title.downcase.gsub(/[^0-9A-Za-z]/i, '-').gsub(/-+/, '-').chomp('-')
		filepath = "_posts/#{filename}.md"

		if File.exists?( filepath )
			puts 'That file already exists! Please enter a unique file name.'
			filepath = "_posts/#{STDIN.gets.chomp!}.md"
		end

		File.open(filepath, 'w') do |f|
			f.write ERB.new(File.read('_templates/post.html.erb')).result(binding)
		end

		system %Q{open #{filepath}}
	end
end

namespace :site do
	desc 'Build site to _siet folder'
	task :create do
	  puts 'Building site to _site folder...'
	  system %Q{bundle exec compass compile}
	  system %Q{bundle exec jekyll build}
	end

	desc 'Remove _site folder'
	task :destroy do
	  puts 'Removing _site folder...'
	  system %Q{rm -rf _site}
	end
end

task :post => 'post:create'
task :site => 'site:create'