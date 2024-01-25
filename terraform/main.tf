provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "crud-task-redis"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_cloudfront_distribution" "my_distribution" {
  origin {
    domain_name = aws_s3_bucket.my_bucket.bucket_regional_domain_name
    origin_id   = "crud-task-redis"
  }

  default_cache_behavior {
    custom_error_response {
      error_code         = 404
      response_code      = 200
      response_page_path = "/index.html"
    }
  }

  enabled             = true
  default_root_object = "index.html"
}
