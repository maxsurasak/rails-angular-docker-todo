FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /todo
COPY Gemfile /todo/Gemfile
COPY Gemfile.lock /todo/Gemfile.lock
RUN \
	gem update --system --quiet && \
	gem install  bundler -v '~> 2.1'
ENV BUNDLER_VERSION 2.1
RUN bundle install
COPY . /todo


EXPOSE ${PORT}

# Setting env up
ENV RAILS_ENV=$RAILS_ENV
ENV RACK_ENV=$RAILS_ENV
# Start the main process.
CMD [ "bundle", "exec", "rails", "server", "-b", "0.0.0.0"]