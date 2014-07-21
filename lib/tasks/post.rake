require 'erb'

namespace :post do
  desc 'Create a new post'
  task :create do
    puts 'What would you like to title your post?'
    title = STDIN.gets.chomp!

    puts 'What is the speaker\'s name?'
    speaker_name = STDIN.gets.chomp!

    puts 'What is the speaker\'s website? (include http://)'
    speaker_url = STDIN.gets.chomp!

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

task :post => 'post:create'