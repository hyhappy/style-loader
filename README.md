# style-loader2
like style-loader，but only support inject
> version：1.0.0 is deprecated

## usage
just like style-loader
```
{
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            },
        },
        'postcss-loader'
    ]
}
```