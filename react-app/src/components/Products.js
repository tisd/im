import React, { Component } from "react";
import Inventory from "../services/inventory";
import { List, Item, Form, Input, Segment, Table} from "semantic-ui-react";

export default class Products extends Component {

    state = {
        products: []
    }

    constructor() {
        super()
        this.getData()
    }

    async getData() {
        this.setState({
            products: await new Inventory().find()
        })
    }

    render() {
        console.log("Products rendering")
        console.log(this.state.products)
        return (
            <div>
                <Segment>
                    <Form>
                        <Input tiny placeholder="name" />
                        <Input tiny placeholder="code" />
                        <Input tiny placeholder="price" />
                        <Input tiny placeholder="description" />
                        <Input tiny type="file" placeholder="photo" />
                        <Input tiny type="submit"/>
                    </Form>
                </Segment>
                <Table>
                    {this.state.products.map((product, index) => 
                        <Table.Row key={index}>
                            <Table.Cell size="tiny" src={product.photo} />
                            <Table.Cell>{product.name}</Table.Cell>
                            <Table.Cell>{"PKR. " + product.price}</Table.Cell>
                            <Table.Cell>{product.description}</Table.Cell>
                            <Table.Cell>{product.code}</Table.Cell>
                        </Table.Row>
                    )}
                </Table>
            </div>
        )
    }
}