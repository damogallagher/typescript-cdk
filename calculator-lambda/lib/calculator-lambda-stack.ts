import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CalculatorLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const calculator = new lambda.Function(this, 'CalculatorHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    
      code: lambda.Code.fromAsset('lambda'),  
      handler: 'calculator.handler'   
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: calculator
    });
  }
}
