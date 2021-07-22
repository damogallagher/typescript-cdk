import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CalculatorLambda from '../lib/calculator-lambda-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CalculatorLambda.CalculatorLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
