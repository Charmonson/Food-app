import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet,
    Picker, Switch, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class Tasting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guests: 1,
            instore: false,
            date: new Date(),
            showCalendar: false,
            showModal: false
        };
    }

    static eventOptions = {
        title: 'Schedule Tasting'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleTasting() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();}
        
        resetForm() {
        this.setState({
            guests: 1,
            event:'',
            instore: false,
            date: new Date(),
            showCalendar: false     
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Guests</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.guests}
                        onValueChange={itemValue => this.setState({guests: itemValue})}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6 or more' value='6' />   
                    </Picker>
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Type of Event</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.event}
                        onValueChange={itemValue => this.setState({event: itemValue})}>
                        <Picker.Item label='Birthday' value='1'/>
                        <Picker.Item label='Wedding' value='2'/>
                        <Picker.Item label='Baby Shower' value='3'/>
                        <Picker.Item label='Anniversary' value='4'/>
                        <Picker.Item label='Other' value='5'/>
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>In-Store?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.instore}
                        trackColor={{true: '#a69fb3', false: null}}
                        onValueChange={value => this.setState({instore: value})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <Button
                        onPress={() =>
                            this.setState({showCalendar: !this.state.showCalendar})
                        }
                        title={this.state.date.toLocaleDateString('en-US')}
                        color='#A69fb3'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
                {this.state.showCalendar && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalendar: false});
                        }}
                        style={styles.formItem}
                    />
                )}
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleTasting()}
                        title='Schedule'
                        color='#A69FB3'
                        accessibilityLabel='Show me available dates for tastings'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Tasting Confirmation</Text>
                        <Text style={styles.modalText}>
                            Number of Guests: {this.state.guests}
                        </Text>
                        <Text style={styles.modalText}>
                            Type of Event: {this.state.events}
                        </Text>
                        <Text style={styles.modalText}>
                            In Store?: {this.state.instore ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {this.state.date.toLocaleDateString('en-US')}
                        </Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#A69FB3'
                            title='Close'
                        />
                    </View>
                </Modal>






            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '200',
        backgroundColor: '#A69FB3',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Tasting;