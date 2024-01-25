terraform {
  backend "s3" {
    bucket = "tf-state-deploy-test"
    key    = "react-cicd/terraform.tfstate"
    region = "us-east-1"
    # Si estás utilizando DynamoDB para el bloqueo de estado
    #dynamodb_table = "mi-tabla-de-bloqueo-de-terraform"
  }
}