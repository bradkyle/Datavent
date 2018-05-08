.PHONY: dev
dev: ## Install npm dependencies for the api, admin, and frontend apps
	@echo "Setting up development environment..."
  cd ./datavent/ && docker-compose run -p 9005:9005 web sh